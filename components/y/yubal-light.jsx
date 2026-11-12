import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jokm5q72l.css';
import '../../css/u/uf6zebb2f.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jokm5q72l"/><path class="uf6zebb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yubal-light"} {...others} />);
}

export default Component;
