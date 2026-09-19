import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uri5h4b8u.css';
import '../../css/c/ct5b1-o3f.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="uri5h4b8u"/><path class="ct5b1-o3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:action-chains"} {...others} />);
}

export default Component;
