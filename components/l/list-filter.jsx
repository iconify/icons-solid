import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge-qb6k6s.css';
import '../../css/l/lz4sajp4x.css';
import '../../css/o/osghi4b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ge-qb6k6s"/><path class="lz4sajp4x"/><path class="osghi4b5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-filter"} {...others} />);
}

export default Component;
