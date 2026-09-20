import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe5l87nba.css';
import '../../css/g/g1lxtqbln.css';
import '../../css/i/idnjrwh2i.css';
import '../../css/j/joy8_duow.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nj3jqb7ww.css';
import '../../css/s/smaklabbd.css';
import '../../css/a/a9c02fr7c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xe5l87nba"/><path class="g1lxtqbln"/><path class="idnjrwh2i"/><path class="joy8_duow"/><g class="jn8qy4bru"><path class="nj3jqb7ww"/><path class="smaklabbd"/><path class="a9c02fr7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:playground-slide"} {...others} />);
}

export default Component;
