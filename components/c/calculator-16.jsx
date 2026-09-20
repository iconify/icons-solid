import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sieez-brj.css';
import '../../css/v/v4lyffbho.css';
import '../../css/x/x7_vrbb-f.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sieez-brj"/><path class="v4lyffbho"/><path clip-rule="evenodd" class="x7_vrbb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:calculator-16"} {...others} />);
}

export default Component;
