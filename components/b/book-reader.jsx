import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2l9ffl4g.css';
import '../../css/v/v_ha0xbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u2l9ffl4g"/><circle class="v_ha0xbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:book-reader"} {...others} />);
}

export default Component;
