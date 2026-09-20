import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/z/zdhnw2bqe.css';
import '../../css/f/fua2itvrq.css';
import '../../css/t/tpyv5ekyq.css';
import '../../css/i/ibq2yhrjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="zdhnw2bqe"/><path class="fua2itvrq"/><path class="tpyv5ekyq"/><path class="ibq2yhrjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:music-playlist-1"} {...others} />);
}

export default Component;
