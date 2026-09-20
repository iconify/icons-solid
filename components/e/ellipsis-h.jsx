import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty_ooxbvp.css';
import '../../css/f/ffappobrr.css';
import '../../css/u/uzprxqbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ty_ooxbvp"/><circle class="ffappobrr"/><circle class="uzprxqbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:ellipsis-h"} {...others} />);
}

export default Component;
