import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/d/d9oh_7bzj.css';
import '../../css/r/r6i_8lg7z.css';
import '../../css/f/f69f52bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="d9oh_7bzj"/><path class="r6i_8lg7z"/><path class="f69f52bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:money-bag-1"} {...others} />);
}

export default Component;
