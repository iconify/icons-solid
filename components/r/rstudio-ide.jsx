import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn2h7mb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jn2h7mb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:rstudio-ide"} {...others} />);
}

export default Component;
