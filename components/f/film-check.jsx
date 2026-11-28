import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvrc3e2gv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvrc3e2gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:film-check"} {...others} />);
}

export default Component;
