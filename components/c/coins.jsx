import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eabl2c-zp.css';
import '../../css/l/lncpo0b-z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eabl2c-zp"/><path class="lncpo0b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:coins"} {...others} />);
}

export default Component;
