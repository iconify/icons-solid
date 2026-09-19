import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuxa2bb1c.css';
import '../../css/e/ex1_iqkbv.css';
import '../../css/s/sibyveg8p.css';
import '../../css/n/nzylh7bdh.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="uuxa2bb1c"/><path clip-rule="evenodd" class="ex1_iqkbv"/><path clip-rule="evenodd" class="sibyveg8p"/><path clip-rule="evenodd" class="nzylh7bdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:macbook"} {...others} />);
}

export default Component;
