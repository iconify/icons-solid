import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz6ignj0u.css';
import '../../css/g/g-bzx0b-k.css';
import '../../css/z/z1svy0bqv.css';
import '../../css/n/nwuzx5b5m.css';
import '../../css/f/fcfk7zbak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz6ignj0u"/><path class="g-bzx0b-k"/><path class="z1svy0bqv"/><path class="nwuzx5b5m"/><path class="fcfk7zbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-3-bold"} {...others} />);
}

export default Component;
