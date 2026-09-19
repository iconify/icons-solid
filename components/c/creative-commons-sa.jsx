import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2i9q5xnv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t2i9q5xnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:creative-commons-sa"} {...others} />);
}

export default Component;
