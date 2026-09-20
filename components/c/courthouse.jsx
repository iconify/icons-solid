import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/v/v72zxwviq.css';
import '../../css/b/bci2onbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="v72zxwviq"/><path class="bci2onbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:courthouse"} {...others} />);
}

export default Component;
