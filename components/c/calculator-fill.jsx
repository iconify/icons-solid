import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu4v_kdxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tu4v_kdxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:calculator-fill"} {...others} />);
}

export default Component;
