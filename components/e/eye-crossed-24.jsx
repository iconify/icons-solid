import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjg4ft7no.css';
import '../../css/m/macbzdbqy.css';
import '../../css/x/x6lke26ww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjg4ft7no"/><path class="macbzdbqy"/><path class="x6lke26ww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eye-crossed-24"} {...others} />);
}

export default Component;
