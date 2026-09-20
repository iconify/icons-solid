import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4or_ln8c.css';
import '../../css/p/pmdjauv5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4or_ln8c"/><path class="pmdjauv5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-ban-light"} {...others} />);
}

export default Component;
