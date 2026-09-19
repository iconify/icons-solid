import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foqmv8hyk.css';
import '../../css/f/fr8e-acnc.css';
import '../../css/c/cps364dhp.css';
import '../../css/i/i-9u-zsjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="foqmv8hyk"/><path class="fr8e-acnc"/><rect class="cps364dhp"/><path class="i-9u-zsjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:line-chat"} {...others} />);
}

export default Component;
