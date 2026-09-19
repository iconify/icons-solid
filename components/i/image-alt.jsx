import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbw59hkqr.css';
import '../../css/u/u19mxjbnb.css';
import '../../css/k/k16fi-_we.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jbw59hkqr"/><path class="u19mxjbnb"/><path class="k16fi-_we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:image-alt"} {...others} />);
}

export default Component;
