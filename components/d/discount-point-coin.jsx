import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gats52bea.css';
import '../../css/f/fkfx22b0z.css';
import '../../css/u/ui-jy_46p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gats52bea"/><path class="fkfx22b0z"/><path class="ui-jy_46p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:discount-point-coin"} {...others} />);
}

export default Component;
