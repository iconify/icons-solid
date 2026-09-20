import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-e4ckbto.css';
import '../../css/b/birgbmbwv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="u-e4ckbto"/><path clip-rule="evenodd" class="birgbmbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:file-manager-16"} {...others} />);
}

export default Component;
