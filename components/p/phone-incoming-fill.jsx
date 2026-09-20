import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2dkisrbn.css';
import '../../css/i/i483i_kue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2dkisrbn"/><path class="i483i_kue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-incoming-fill"} {...others} />);
}

export default Component;
