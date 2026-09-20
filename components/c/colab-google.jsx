import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvuddt06t.css';
import '../../css/x/x7k78fe0i.css';
import '../../css/i/iskyp3sfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bvuddt06t"/><path class="x7k78fe0i"/><path class="iskyp3sfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:colab-google"} {...others} />);
}

export default Component;
