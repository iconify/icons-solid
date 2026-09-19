import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il7_fobub.css';
import '../../css/q/qty0zwbsq.css';
import '../../css/f/fagpc2blc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="il7_fobub"/><path class="qty0zwbsq"/><path class="fagpc2blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:layers-fill"} {...others} />);
}

export default Component;
