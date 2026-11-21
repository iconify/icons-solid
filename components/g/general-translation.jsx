import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etah7iban.css';

const viewBox = {"width":215.696,"height":215.696,"left":20.152,"top":20.152};
const content = `<path class="etah7iban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:general-translation"} {...others} />);
}

export default Component;
