import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l7tgqzbbj.css';
import '../../css/f/fb4plhbwx.css';
import '../../css/r/r7hf6hb9q.css';
import '../../css/d/d6u1tcc9r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="l7tgqzbbj"/><path class="fb4plhbwx"/><circle class="r7hf6hb9q"/><path class="d6u1tcc9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:solar-energy-one"} {...others} />);
}

export default Component;
