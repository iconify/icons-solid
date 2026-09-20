import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx50ssb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gx50ssb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:list-filter"} {...others} />);
}

export default Component;
