import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.bgatx5byk {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4fd1d9, #4fd1d9);
}

.kmmt9z34h {
  fill: var(--svg-color--fff, #fff);
  d: path("M38 48h-6.1V25c-2.2 2.1-4.9 3.6-7.9 4.6v-5.5c1.6-.5 3.3-1.5 5.2-3s3.2-3.2 3.8-5.1h5z");
}
</style><circle class="bgatx5byk"/><path class="kmmt9z34h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:digit-one"} {...others} />);
}

export default Component;
