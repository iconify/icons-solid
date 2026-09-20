import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wp4qbtciy.css';
import '../../css/f/fnqqdgbev.css';
import '../../css/q/qwkqahhpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wp4qbtciy"/><path class="fnqqdgbev"/><path clip-rule="evenodd" class="qwkqahhpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:stock-flat"} {...others} />);
}

export default Component;
