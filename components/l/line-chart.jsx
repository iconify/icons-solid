import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvd31abxp.css';
import '../../css/t/ta7rc4bmw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nvd31abxp"/><path class="ta7rc4bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:line-chart"} {...others} />);
}

export default Component;
