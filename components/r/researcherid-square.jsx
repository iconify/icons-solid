import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tudvt2bxw.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="tudvt2bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:researcherid-square"} {...others} />);
}

export default Component;
