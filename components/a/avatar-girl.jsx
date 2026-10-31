import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x7yw7b4ee.css';
import '../../css/y/yu1z8nasx.css';
import '../../css/j/jl6c3gqpc.css';
import '../../css/s/sh_y4dbkz.css';
import '../../css/q/q7n43vb5t.css';
import '../../css/g/gpg9r0d5y.css';
import '../../css/j/jv7h2pbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x7yw7b4ee"/><path class="yu1z8nasx"/><path class="jl6c3gqpc"/><path class="sh_y4dbkz"/><path class="q7n43vb5t"/><path class="gpg9r0d5y"/><path class="jv7h2pbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-girl"} {...others} />);
}

export default Component;
