import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud_9sccoj.css';
import '../../css/c/c5p-nqbdf.css';
import '../../css/w/wc2m4bc5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ud_9sccoj"/><path class="c5p-nqbdf"/><path class="wc2m4bc5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-focus-outline"} {...others} />);
}

export default Component;
