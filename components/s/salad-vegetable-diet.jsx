import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hk9ldbudz.css';
import '../../css/v/vkn8gtbpp.css';
import '../../css/o/oucvjdbic.css';
import '../../css/z/znj28ac8u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="to-5kdesz"><path class="hk9ldbudz"/><path class="vkn8gtbpp"/><path class="oucvjdbic"/><path class="znj28ac8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:salad-vegetable-diet"} {...others} />);
}

export default Component;
