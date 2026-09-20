import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/muapvqbke.css';
import '../../css/i/ihvi8osrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="muapvqbke"/><path class="ihvi8osrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:graph4"} {...others} />);
}

export default Component;
