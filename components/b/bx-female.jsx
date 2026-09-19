import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfz3w9lrl.css';
import '../../css/l/ltep8mzcg.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="yfz3w9lrl"/><path class="ltep8mzcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-female"} {...others} />);
}

export default Component;
