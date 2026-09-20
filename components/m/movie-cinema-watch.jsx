import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lfhhoabsl.css';
import '../../css/b/b5ogk12xe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lfhhoabsl"/><path class="b5ogk12xe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:movie-cinema-watch"} {...others} />);
}

export default Component;
