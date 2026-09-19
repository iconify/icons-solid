import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4qqhxadq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4qqhxadq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:diff-modified"} {...others} />);
}

export default Component;
