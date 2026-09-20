import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk3jipkgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fk3jipkgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:multiplier-2x"} {...others} />);
}

export default Component;
