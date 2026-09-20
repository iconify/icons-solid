import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk7cyca1a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jk7cyca1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bowl-chop-stick-remix"} {...others} />);
}

export default Component;
