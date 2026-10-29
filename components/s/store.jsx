import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb07q-bxa.css';
import '../../css/j/j3skc-b5v.css';
import '../../css/c/crqmprq7t.css';
import '../../css/e/ejtpq101k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cb07q-bxa wm-k"/><path class="j3skc-b5v wm-a"/><path class="crqmprq7t wm-k"/><path class="ejtpq101k wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:store"} {...others} />);
}

export default Component;
