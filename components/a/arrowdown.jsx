import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuhzw_-te.css';
import '../../css/g/gn7buhpvc.css';

const viewBox = {"width":9,"height":16};
const content = `<path class="zuhzw_-te"/><path class="gn7buhpvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:arrowdown"} {...others} />);
}

export default Component;
