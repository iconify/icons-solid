import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok-rcqbta.css';

const viewBox = {"width":33,"height":24};
const content = `<path class="ok-rcqbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:check"} {...others} />);
}

export default Component;
