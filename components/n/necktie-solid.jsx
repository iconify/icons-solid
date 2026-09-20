import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk_ichqco.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fk_ichqco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:necktie-solid"} {...others} />);
}

export default Component;
