import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf1-a4a-p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uf1-a4a-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:attachement-16"} {...others} />);
}

export default Component;
