import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5xbgz_6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z5xbgz_6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chevron-down-square-fill"} {...others} />);
}

export default Component;
