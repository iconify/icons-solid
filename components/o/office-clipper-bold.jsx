import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiefihbpi.css';
import '../../css/d/daoycporf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiefihbpi"/><path class="daoycporf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-clipper-bold"} {...others} />);
}

export default Component;
