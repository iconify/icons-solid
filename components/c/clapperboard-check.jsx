import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb6cpgbxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qb6cpgbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:clapperboard-check"} {...others} />);
}

export default Component;
