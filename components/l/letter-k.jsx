import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.ozrrc3b-o {
  fill: var(--svg-color--fff, #fff);
  d: path("M20.2 17.5h6v12l11.2-12h7.8L33.3 29.4l12.5 17.1H38l-8.9-12.7l-2.9 3v9.7h-6z");
}
</style><circle class="bgatx5byk"/><path class="ozrrc3b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:letter-k"} {...others} />);
}

export default Component;
