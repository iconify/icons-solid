import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe5dr5b9o.css';
import '../../css/h/hsqpd_2br.css';
import '../../css/a/anzwqbcxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qe5dr5b9o"/><path class="hsqpd_2br"/><path class="anzwqbcxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:webpack"} {...others} />);
}

export default Component;
