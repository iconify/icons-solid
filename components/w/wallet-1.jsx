import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/g/git7pab-z.css';
import '../../css/z/zu5ak_uvj.css';
import '../../css/n/n36oh8btv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="git7pab-z"/><path class="zu5ak_uvj"/><path class="n36oh8btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:wallet-1"} {...others} />);
}

export default Component;
