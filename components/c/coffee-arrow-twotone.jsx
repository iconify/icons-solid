import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a99zix.css';
import '../../css/i/iw1iew.css';
import '../../css/k/kmrbxx.css';
import '../../css/y/y4wbml.css';
import '../../css/v/vfzm1b.css';
import '../../css/s/siu27j.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-40.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a99zix iw1iew"/><path class="iw1iew kmrbxx y4wbml"/><path class="iw1iew vfzm1b y4wbml"/><path class="iw1iew siu27j y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:coffee-arrow-twotone"} {...others} />);
}

export default Component;
