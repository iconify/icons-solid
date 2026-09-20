import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv_9jiofm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fv_9jiofm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:table-rows-fill"} {...others} />);
}

export default Component;
