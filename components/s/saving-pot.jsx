import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6zqz9boz.css';
import '../../css/v/v938tnbhr.css';
import '../../css/h/hlf86pbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i6zqz9boz"/><path class="v938tnbhr"/><path class="hlf86pbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:saving-pot"} {...others} />);
}

export default Component;
